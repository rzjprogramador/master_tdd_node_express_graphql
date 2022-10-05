import 'module-alias/register'
import 'express-async-errors'

import app from '@src/main/config/app'


app.listen(5050, () => console.log('SERVER ON >> 5051'))