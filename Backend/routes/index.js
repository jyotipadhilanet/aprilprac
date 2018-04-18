import {insert,update,cityData,fetchData,stateData,deleteData} from '../controller/user'
app.post('/insert',insert)
app.post('/update',update)
app.post('/delete/:id',deleteData)
app.get('/fetchData',fetchData)
app.get('/stateData',stateData)
app.get('/cityData/:statenm',cityData)