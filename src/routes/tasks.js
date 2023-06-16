const express = require('express');
const router = express.Router();
const { TaskController, upload } = require('../controllers/TaskController');

router.post('/guardar_datos', upload.single('foto'), TaskController.guardarDatos);
router.get('/:asignaturaSlug', TaskController.obtenerDatosAsignatura);
router.get('/:asignaturaSlug/visualizar/:id', TaskController.visualizarDatos);
router.get('/:asignaturaSlug/editar/:id', upload.none(), TaskController.editarRegistro);
router.post('/actualizar/:id', upload.single('nuevaFoto'), TaskController.actualizarRegistro);
router.post('/:asignaturaSlug/borrar/:id', TaskController.borrarRegistro);

module.exports = router;

