const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { mongoose } = require('./config/db');
const app = express();
const port = 3000
app.set('nombreApp', 'Aplicacion Smarthome');
app.set('puerto', process.env.PORT || 3000);

//Codigo que permite los cors desde cualquier origen
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(`Request: ${req.method} ${req.originalUrl}`);
    next();
  });
app.use('/api', require('./routes/usuario'))

app.listen(app.get('puerto'), () => {
    console.log('Nombre de la App', app.get('nombreApp'));
    console.log('Puesto del servidor', app.get('puerto'));

})
<<<<<<< HEAD

//led
const LedData = mongoose.model('LedData', {
    ledName: String,
    ledState: Number,
});
const LedData2 = mongoose.model('LedData2', {
    led2Name: String,
    led2State: Number,
});
const LedData3 = mongoose.model('LedData3', {
    led3Name: String,
    led3State: Number,
});

//ventilador 4
const Ventilador = mongoose.model('Ventilador', {
    fanName: String,
    fanState: Number,
});

//sensor movimiento 5
const SensorMovimiento = mongoose.model('SensorMovimiento', {
    S_Name: String,
    S_State: Number,
});
//sensor magnetico 6
const SensorMagnetico = mongoose.model('SensorMagnetico', {
    S1_Name: String,
    S1_State: Number,
});
//sensor impacto 7
const SensorImpacto = mongoose.model('SensorImpacto', {
    S2_Name: String,
    S2_State: Number,
});
//sensor de luz 8
const SensorLuz = mongoose.model('SensorLuz', {
    S3_Name: String,
    S3_State: Number,
});

//SENSOR 1
// Ruta para recibir los datos del ESP32 y almacenarlos en la base de datos
app.post('/api/sensores', async (req, res) => {
    try {
        const { ledName, ledState } = req.body;
        const data = new LedData({ ledName:ledName, ledState:ledState });
        await data.save();
        res.status(200).json({ message: 'Datos guardados correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar los datos.' });
    }
});


// GET route to retrieve a sensor data by its ID
app.get('/api/sensores/:id', function (req, res) {
    Sensor.findById(req.params.id, function (err, sensor) {
        if (err) {
            res.status(500).send({ error: 'Could not fetch sensor data.' });
        } else if (!sensor) {
            res.status(404).send({ error: 'No sensor data found with this ID.' });
        } else {
            res.status(200).send(sensor);
        }
    });
});

// DELETE route to delete a sensor data by its ID
app.delete('/api/sensores/:id', function (req, res) {
    Sensor.findByIdAndRemove(req.params.id, function (err, sensor) {
        if (err) {
            res.status(500).send({ error: 'Could not delete sensor data.' });
        } else if (!sensor) {
            res.status(404).send({ error: 'No sensor data found with this ID.' });
        } else {
            res.status(200).send({ success: 'Sensor data deleted successfully.' });
        }
    });
});



//SENSOR 2
// Ruta para recibir los datos del ESP32 y almacenarlos en la base de datos
app.post('/api/sensores', async (req, res) => {
    try {
        const { led2Name, led2State } = req.body;

        // Crear un nuevo documento de LedData con los datos recibidos
        const data2 = new LedData2({ led2Name, led2State });

        // Guardar el documento en la base de datos
        await data2.save();
        console.log('Datos guardados correctamente DEL LED 2 en la base de datos 1min de espera.');
        res.status(200).json({ message: 'Datos guardados correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar los datos.' });
    }
});


//SENSOR 3
// Ruta para recibir los datos del ESP32 y almacenarlos en la base de datos
app.post('/api/sensores', async (req, res) => {
    try {
        const { led3Name, led3State } = req.body;

        // Crear un nuevo documento de LedData con los datos recibidos
        const data = new LedData({ led3Name, led3State });

        // Guardar el documento en la base de datos
        await data.save();
        console.log('Datos guardados correctamente en la DEL LED 3 base de datos 1min de espera.');
        res.status(200).json({ message: 'Datos guardados correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar los datos.' });
    }
});

//SENSOR 4
// Ruta para recibir los datos del ESP32 y almacenarlos en la base de datos
app.post('/api/sensores', async (req, res) => {
    try {
        const { fanName, fanState } = req.body;

        // Crear un nuevo documento de LedData con los datos recibidos
        const data = new LedData({ fanName, fanState });

        // Guardar el documento en la base de datos
        await data.save();
        console.log('Datos guardados correctamente ventilador en la  base de datos 1min de espera.');
        res.status(200).json({ message: 'Datos guardados correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar los datos.' });
    }
});

//SENSOR 3
// Ruta para recibir los datos del ESP32 y almacenarlos en la base de datos
app.post('/api/sensores', async (req, res) => {
    try {
        const { S_Name, S_State } = req.body;

        // Crear un nuevo documento de LedData con los datos recibidos
        const data = new LedData({ S_Name, S_State });

        // Guardar el documento en la base de datos
        await data.save();
        console.log('Datos guardados correctamente PIR en la base de datos 1min de espera.');
        res.status(200).json({ message: 'Datos guardados correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar los datos.' });
    }
});

//SENSOR 3
// Ruta para recibir los datos del ESP32 y almacenarlos en la base de datos
app.post('/api/sensores', async (req, res) => {
    try {
        const { S1_Name, S1_State } = req.body;

        // Crear un nuevo documento de LedData con los datos recibidos
        const data = new LedData({ S1_Name, S1_State });

        // Guardar el documento en la base de datos
        await data.save();
        console.log('Datos guardados correctamente PUERTA en la  base de datos 1min de espera.');
        res.status(200).json({ message: 'Datos guardados correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar los datos.' });
    }
});

//SENSOR 3
// Ruta para recibir los datos del ESP32 y almacenarlos en la base de datos
app.post('/api/sensores', async (req, res) => {
    try {
        const { S2_Name, S2_State } = req.body;

        // Crear un nuevo documento de LedData con los datos recibidos
        const data = new LedData({ S2_Name, S2_State });

        // Guardar el documento en la base de datos
        await data.save();
        console.log('Datos guardados correctamente BUZER en la  base de datos 1min de espera.');
        res.status(200).json({ message: 'Datos guardados correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar los datos.' });
    }
});

//SENSOR 3
// Ruta para recibir los datos del ESP32 y almacenarlos en la base de datos
app.post('/api/sensores', async (req, res) => {
    try {
        const { S3_Name, S3_State } = req.body;

        // Crear un nuevo documento de LedData con los datos recibidos
        const data = new LedData({ S3_Name, S3_State });

        // Guardar el documento en la base de datos
        await data.save();
        console.log('Datos guardados correctamente LUZ en la base de datos 1min de espera.');
        res.status(200).json({ message: 'Datos guardados correctamente.' });
    } catch (error) {
        res.status(500).json({ error: 'Error al guardar los datos.' });
    }
});



=======
>>>>>>> a6bbade8ead41e2c7f017468a23177944eb11248
