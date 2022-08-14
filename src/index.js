import dva from 'dva';
import './index.css';

// 1. Initialize
const app = dva();

// 2. Router
app.router(require('./router').default);

// 3. Start
app.start('#root');