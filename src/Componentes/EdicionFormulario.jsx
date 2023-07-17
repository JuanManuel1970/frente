import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const EdicionFormulario = () => {
  const navigate = useNavigate();

  const DATOS = 'https://tras-production.up.railway.app/clientes';

  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const setData = (data) => {
    localStorage.setItem('ID', data._id);
    localStorage.setItem('Nombre', data.nombre);
    localStorage.setItem('Apellido', data.apellido);
    localStorage.setItem('Email', data.email);
    localStorage.setItem('Password', data.password);
  };

  const getData = () => {
    axios
      .get(DATOS)
      .then((res) => {
        console.log(res.data);
        setApiData(res.data.personas);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onDelete = (id) => {
    Swal.fire({
      icon: 'question',
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log('1. Estamos en el onDelete');

        axios
          .delete(`https://tras-production.up.railway.app/clientes/${id}`)
          .then(() => {
            getData();
            console.log('2. Respondemos Promesa');
            Swal.fire({
              icon: 'success',
              title: '¡Éxito!',
              text: 'El registro ha sido eliminado exitosamente.',
            }).then(() => {
              navigate('/');
            });
          })
          .catch((error) => {
            console.log(error);
          });

        console.log(`La ruta es: https://tras-production.up.railway.app/clientes${id}`);
        console.log('3. Salimos del deletes');
      }
    });
  };

  console.log(apiData);

  return (
    <div className="container m-5">
      <div className="text-center m-5">
        <h1>Listado de Clientes registrados</h1>
      </div>

    
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellido</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {apiData.map((data) => {
            return (
              <Table.Row key={data._id}>
                <Table.Cell>{data.nombre}</Table.Cell>
                <Table.Cell>{data.apellido}</Table.Cell>
                <Table.Cell>{data.email}</Table.Cell>
                <Table.Cell>
                  <Link to="/update">
                    <Button
                      className="btn btn-success"
                      onClick={() => {
                        setData(data);
                        console.log('Dato actualizado');
                      }}
                    >
                      Modificar
                    </Button>
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Button
                    className="btn btn-danger"
                    onClick={() => onDelete(data._id)}
                  >
                    Borrar
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default EdicionFormulario;
