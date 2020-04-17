import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333'
});

export default api;

/*OPÇÕES
1) IOS com emulador: localhost

2) IOS com dispositivo fisico: ip da máquina

3) ANDROID com emulador: localhost (adb reverse)
o emulador do android é uma máquina virtual, diferente do emulador do ios que
utiliza o mesmo sistema do mac por tras, então o emulador do IOS encherga como
localhost o próprio mac. O emulador do android não encherga o localhost do mac 
ou do seu sistema operacional. Ele encherga como localhost ele mesmo, porque ele 
é uma máquina virtual, um sistema criado do zero.
--> executar no terminal adb reverse tcp:3333 tcp:3333
- passa o ip da aplicação node, a porta 3333 da nossa máquina vai ser direcionada
pra porta 3333 do emulador

4) ANDROID com emulador: 10.0.2.2 (Android Studio)

5) ANDROID com emulador: 10.0.3.2 (Genymotion)

6) ANDROID com físico: IP da máquina

*/