const express = require('express')
const { Sequelize, DataTypes } = require('sequelize')
const Task = require('./models/task')

const app = express()
const sequelize = new Sequelize('postgres://postgres:example@db:5432/task-list')
const tasklist = Task(sequelize, DataTypes)

// We need to parse JSON coming from requests
app.use(express.json())

// List tasklist
app.get('/tasklist', (req, res) => {
  res.json({ action: 'Listing tasklist' })
})

// Create task
app.post('/tasklist', (req, res) => {
  const body = req.body

  res.json(body)
})

// Show task
app.get('/tasklist/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Showing task', taskId: taskId })
})

// Update task
app.put('/tasklist/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Updating task', taskId: taskId })
})

// Delete task
app.delete('/tasklist/:id', (req, res) => {
  const taskId = req.params.id

  res.send({ action: 'Deleting task', taskId: taskId })
})


//Lista de lugares visitados pelo usuario
app.get('/tasklists', async (req, res) => {
  const lugarList = await visita.findAll()  //todos los registros de lugares
  res.json({ lista: lugarList })
})


// Visualizar lista de lugares visitados pelo usuario por id
app.get('/tasklists/:id', async (req, res) => {
  const listaId = req.params.id
  const tasklist = await visita.findByPk(listaId)

  res.send({ tasklist })
})

app.post('/tasklists', async (req, res) => {
  const body = req.body;
  
  const novoitem = await visita.create({
      id_lugar: body.id_lugar,
      nome_lista: body.nome_lista,
      visitou_lista: body.visitou_lista,
      comentarios_lista: body.comentarios_lista,
      valor_lista: body.valor_lista,
  });
  res.json({result: "Nova tarefa ", novoitem })
});

// DELETE LUGARES METODO DE AULA
app.delete('/tasklists/:id', async (req, res) => {
  const lugaresId = req.params.id
  const lugar = await visita.findByPk(lugaresId)
  if (lugar) {
    await lugar.destroy()
    res.send({ lugar })
    res.status(200)
    res.send({message: 'O lugar foi apagado com exito'})
  } else {
    res.status(404)
    res.send({ message: 'lugar nâo existe' })
  }
}) 

// Update task
app.put('/tasklists/:id', async (req, res) => {
  const taskId = req.params.id
  const body = req.body
  const lugares = await visita.findByPk(taskId)

  if (lugares) {
    await lugares.update({ 
      id_lugar: body.id_lugar,
      nome_lista: body.nome_lista,
      visitou_lista: body.visitou_lista,
      comentarios_lista: body.comentarios_lista,
      valor_lista: body.valor_lista
    })
    res.send({lugares})
  } else {
    res.status(404)
    res.send({ message: 'Destino não encontrado' })
  }
})

app.listen(3000, () => {
  console.log('Iniciando o ExpressJS na porta 3000')
})