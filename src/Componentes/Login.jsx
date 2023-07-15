import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://tras-production.up.railway.app/login', data);

      if (response.data.success) {
        Swal.fire({
          icon: 'success',
          title: '¡Inicio de sesión exitoso!',
          text: 'Has iniciado sesión correctamente.',
        }).then(() => {
          navigate('/edicionformulario');
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: response.data.message,
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ocurrió un error al iniciar sesión. Por favor, intenta nuevamente más tarde.',
      });
    }
  };

  return (
    <div className="container mt-5">
      <div className="text-center m-5">
        <h1>Iniciar sesión</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label>Email:</label>
          <input
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            type="email"
            {...register('email', { required: true })}
          />
          {errors.email && <p className="invalid-feedback">El email es obligatorio.</p>}
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            type="password"
            {...register('password', { required: true })}
          />
          {errors.password && <p className="invalid-feedback">La contraseña es obligatoria.</p>}
        </div>
        <button type="submit" className="btn btn-primary">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Login;
