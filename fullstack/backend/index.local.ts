import { app } from './index';

const port = process.env.PORT || 4000

app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`)
})