import { app } from './app';

const PORT = 3333

app.listen(PORT, () => {
    console.log(`Orchestrator is running on port: ${PORT}`)
});