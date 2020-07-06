import { createHashHistory } from 'history';

const hashHistory = createHashHistory();

hashHistory.listen((location, action) => {
    console.log("location : ", location)
});

export default hashHistory;