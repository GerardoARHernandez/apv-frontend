# Sistema de Gestión de Veterinarios y Pacientes

## Descripción

Este es un sistema web completo desarrollado para una veterinaria. Permite a los veterinarios registrarse, gestionar pacientes y editar su perfil. El backend utiliza **MariaDB** para gestionar la base de datos, y el frontend está desarrollado en **React** con **Tailwind CSS** para la interfaz de usuario.

### Funcionalidades principales:

- **Registro de Veterinarios**: Los veterinarios se registran en la plataforma y reciben un correo de confirmación con Mailtrap que incluye un token de verificación para activar su cuenta.
- **Gestión de Pacientes**: Una vez autenticados, los veterinarios pueden registrar pacientes con datos como nombre del paciente, nombre del propietario, fecha de alta, email y síntomas. Los pacientes registrados se muestran en la misma página con opciones para editar o borrar la información.
- **Perfil de Veterinarios**: Los veterinarios pueden actualizar su información personal, incluyendo nombre, teléfono, email y sitio web.
- **Cambio de Contraseña**: Los veterinarios pueden cambiar su contraseña desde su perfil. Si no recuerdan la contraseña, pueden solicitar un enlace de recuperación de contraseña a través de su correo, el cual incluye un nuevo token de verificación.

## Tecnologías

- **Backend**: Node.js, Express, Sequelize, MariaDB
- **Frontend**: React, Tailwind CSS, JavaScript, HTML5, CSS3
- **Base de datos**: MariaDB
- **Autenticación y Seguridad**: JWT (JSON Web Tokens), Bcrypt, Mailtrap para el envío de correos electrónicos de confirmación y recuperación de contraseñas.

## Uso

    Registro de Veterinarios: Los veterinarios pueden registrarse en la plataforma y verificar su cuenta a través del enlace enviado por correo electrónico.
    Inicio de Sesión: Una vez activada la cuenta, pueden iniciar sesión para acceder a su perfil y a la gestión de pacientes.
    Gestión de Pacientes: Desde el panel de control, pueden agregar nuevos pacientes y editar o eliminar pacientes existentes.
    Recuperación de Contraseña: En caso de olvidar la contraseña, pueden solicitar un enlace de recuperación desde la página de inicio de sesión.