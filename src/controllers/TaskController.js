const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, '../public/uploads/'); 
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    cb(null, true);
  }
});

const TaskController = {
  guardarDatos: (req, res) => {
    req.getConnection((error, connection) => {
      if (error) {
        console.error('Error al obtener la conexión a la base de datos:', error);
        return;
      }

      const data = {
        foto: req.file.filename,
        titulo: req.body.titulo,
        asignatura: req.body.asignatura,
        descripcion: req.body.descripcion
      };

      connection.query('INSERT INTO subir SET ?', [data], (error, renglones) => {
        console.log({
          id: renglones.insertId,
          foto: data.foto,
          titulo: data.titulo,
          asignatura: data.asignatura,
          descripcion: data.descripcion,
        });

        const asignaturaSlug = data.asignatura.toLowerCase().replace(/ /g, '_');
        res.redirect(`/${asignaturaSlug}`);
      });
    });
  },

  obtenerDatosAsignatura: (req, res) => {
    req.getConnection((error, connection) => {
      if (error) {
        console.error('Error al obtener la conexión a la base de datos:', error);
        return;
      }

      const asignaturaSlug = req.params.asignaturaSlug;

      const asignaturasPermitidas = ['matematicas_discretas', 'algebra', 'calculo_diferencial', 'calculo_integral', 'probabilidad_y_estadistica'];
      if (!asignaturasPermitidas.includes(asignaturaSlug)) {
        res.redirect('/');
        return;
      }

      const query = `SELECT id, foto, titulo, asignatura, descripcion FROM subir WHERE asignatura = ?`;
      connection.query(query, [asignaturaSlug], (err, results) => {
        if (err) {
          console.error('Error al obtener los datos de la base de datos:', err);
          return;
        }

        res.render('asignatura', { asignatura: asignaturaSlug, datos: results });
      });
    });
  },

  visualizarDatos: (req, res) => {
    const id = req.params.id;
    req.getConnection((error, connection) => {
      if (error) {
        console.error('Error al obtener la conexión a la base de datos:', error);
        return;
      }


      const query = `SELECT * FROM subir WHERE id = ?`;
      connection.query(query, [id], (err, results) => {
        if (err) {
          console.error('Error al obtener los datos de la base de datos:', err);
          return; 
        }

        res.render('visualizar', {datos: results[0] });
      });
    });
  },



  editarRegistro: (req, res) => {
    const id = req.params.id;
    req.getConnection((error, connection) => {
      if (error) {
        console.error('Error al obtener la conexión a la base de datos:', error);
        return;
      }

      const query = `SELECT * FROM subir WHERE id = ?`;
      connection.query(query, [id], (err, results) => {
        if (err) {
          console.error('Error al obtener los datos de la base de datos:', err);
          return;
        }
        res.render('editar', { datos: results[0] });
      });
    });
  },

  actualizarRegistro: (req, res) => {
    const id = req.params.id;
    const { nuevoTitulo, nuevaDescripcion, asignaturaActual, nuevaAsignatura } = req.body;
    const updatedData = {
      titulo: nuevoTitulo,
      descripcion: nuevaDescripcion,
      asignatura: nuevaAsignatura || asignaturaActual, 
    };

    req.getConnection((error, connection) => {
      if (error) {
        console.error('Error al obtener la conexión a la base de datos:', error);
        return;
      }

      const query = `UPDATE subir SET ? WHERE id = ?`;
      connection.query(query, [updatedData, id], (err) => {
        if (err) {
          console.error('Error al actualizar el registro en la base de datos:', err);
          return;
        }

        if (req.file) {
          const imagePath = `../public/uploads/${req.file.filename}`;

          const querySelect = `SELECT foto FROM subir WHERE id = ?`;
          connection.query(querySelect, [id], (err, results) => {
            if (err) {
              console.error('Error al obtener la imagen anterior de la base de datos:', err);
              return;
            }

            const previousImage = results[0].foto;
            const filePath = path.join(__dirname, '../public/uploads', previousImage);
            if (previousImage) {
              fs.unlink(filePath, (err) => {
                if (err) {
                  console.error('Error al eliminar la imagen anterior:', err);
                }
                console.log(`Foto actualizada`);
              });
            }
          });

          const queryUpdateImage = `UPDATE subir SET foto = ? WHERE id = ?`;
          connection.query(queryUpdateImage, [req.file.filename, id], (err) => {
            if (err) {
              console.error('Error al actualizar la imagen en la base de datos:', err);
              return;
            }

            const referer = req.get('referer');
            if (referer) {
              const redirectUrl = referer.split('/').slice(0, -2).join('/');
              res.redirect(redirectUrl);
            } else {
              res.redirect('/');
            }
          });
        } else {
          const referer = req.get('referer');
          if (referer) {
            const redirectUrl = referer.split('/').slice(0, -2).join('/');
            res.redirect(redirectUrl);
          } else {
            res.redirect('/');
          }
        }
      });
    });
  },

  borrarRegistro: (req, res) => {
    const id = req.params.id;
    req.getConnection((error, connection) => {
      if (error) {
        console.error('Error al obtener la conexión a la base de datos:', error);
        return;
      }

      const query = `SELECT foto FROM subir WHERE id = ?`;
      connection.query(query, [id], (err, results) => {
        if (err) {
          console.error('Error al obtener los datos de la base de datos:', err);
          return;
        }

        const foto = results[0].foto;
        const filePath = path.join(__dirname, '../public/uploads', foto);

        const deleteQuery = `DELETE FROM subir WHERE id = ?`;
        connection.query(deleteQuery, [id], (deleteErr) => {
          if (deleteErr) {
            console.error('Error al borrar el registro de la base de datos:', deleteErr);
            return;
          }

          fs.unlink(filePath, (err) => {
            if (err) {
              console.error('Error al borrar la foto:', err);
            }
            console.log('Foto borrada de la base de datos');
            res.redirect('back');
          });
        });
      });
    });
  },

};

module.exports = { TaskController, upload };



