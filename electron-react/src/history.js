import { createHashHistory } from 'history';

const hashHistory = createHashHistory();

hashHistory.listen((location, action) => {
    console.log(action)
});

export default hashHistory;