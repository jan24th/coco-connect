type EN_Messages = typeof import('./messages/en.json');
type CN_Messages = typeof import('./messages/cn.json');
type Messages = EN_Messages & CN_Messages
