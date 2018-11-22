/*  
Data Manager
*/

let roles = ['SALARIE', 'RESPONSABLE', 'DRH', 'ADMIN']
let getData = () => JSON.parse(localStorage.getItem('data'))
let setData = a => localStorage.setItem('data', JSON.stringify(a))

let checkData = () => {
  if (getData() == null) {
    setData({
      users: [{
        id: 0,
        password: "admin",
        pseudo: "Admin",
        firstName: "Guillaume",
        lastName: "Fourny",
        ddn: "1995-10-14",
        tel: "06 32 17 14 05",
        addresse: {
          cp: "44800",
          ville: "St Herblain",
          rue: "XX rue de la rue",
          complement: "6eme etage"
        },
        mail: "admin@domain.com",
        roles: ['SALARIE', 'RESPONSABLE', 'DRH', 'ADMIN'],
        contrats: [{
          dateDebut: "2018-11-08",
          dateFin: "2018-11-16",
          demandes: []
        }]
      }, {
        id: 1,
        password: "Password01",
        pseudo: "gfourny",
        firstName: "Guillaume",
        lastName: "Fourny",
        ddn: "1995-10-14",
        tel: "06 32 17 14 05",
        addresse: {
          cp: "44800",
          ville: "St Herblain",
          rue: "XX rue de la rue",
          complement: "6eme etage"
        },
        mail: "gfourny@domain.com",
        roles: ['SALARIE', 'RESPONSABLE', 'DRH', 'ADMIN'],
        contrats: [{
          dateDebut: "2018-11-08",
          dateFin: "2018-11-16",
          demandes: []
        }],
        planning: [
          {
            "lundi": {
              "crenau1": 9,
              "crenau2": 17,
              "pause": 1,
              "abscence": "CA"
            },
            "mardi": {
              "crenau1": 8,
              "crenau2": 16,
              "pause": 1,
              "abscence": "CA"
            },
            "mercredi": {
              "crenau1": 10,
              "crenau2": 18,
              "pause": 1,
              "abscence": "CA"
            },
            "jeudi": {
              "crenau1": 9,
              "crenau2": 18,
              "pause": 1,
              "abscence": "CA"
            },
            "vendredi": {
              "crenau1": 9,
              "crenau2": 15,
              "pause": 1,
              "abscence": "RTT"
            }
          },
        ],
        "conge": {
          "CA": 25,
          "RTT": 10
        },
      }, {
        id: 2,
        password: "Password01",
        pseudo: "thenry",
        firstName: "Thierry",
        lastName: "Henry",
        ddn: "1974-06-10",
        tel: "00 11 22 33 44",
        addresse: {
          cp: "44200",
          ville: "Nantes",
          rue: "XX rue de la rue",
          complement: "12em etage"
        },
        mail: "user@domain.com",
        roles: ['SALARIE'],
        contrats: [{
          dateDebut: "2018/11/08",
          dateFin: "2018-11-16",
          demandes: []
        }]
      }]
    })
  }
}

export default {
  getData: () => getData(),
  setData: obj => setData(obj),
  resetData: () => {
    localStorage.removeItem('data')
    sessionStorage.removeItem('user')
    checkData()
  },
  isLogged: () => sessionStorage.getItem('user') != null,
  isLoggin: false,
  getLoggedUser: () => JSON.parse(sessionStorage.getItem('user')),
  logout: () => sessionStorage.removeItem('user'),
  login: (login, password) => {
    checkData()
    let user = getData().users.find(e => e.mail == login && e.password == password)
    if (user != undefined) {
      sessionStorage.setItem('user', JSON.stringify(user))
    }
    return user
  },
  saveUser: uUser => {
    let data = getData()
    let userIndex = data.users.map(function (user) { return user.id }).indexOf(uUser.id);
    data.users[userIndex] = uUser
    setData(data)
    if (JSON.parse(sessionStorage.getItem('user')).id == uUser.id) {
      sessionStorage.setItem('user', JSON.stringify(uUser))
    }
  },
  isAdmin: user => user.roles.indexOf('ADMIN') > -1,
  isDRH: user => user.roles.indexOf('DRH') > -1,
  getRoles: () => roles,
  createUser: user => {
    let data = getData()
    user.id = new Date().getTime()
    data.users.push(user)
    setData(data)
  },
  findUser: (firstName, lastName, pseudo, mail) => {
    let data = getData().users
    let usersfind = {
      firstName: data.filter(u => u.firstName.toUpperCase().includes(firstName.toUpperCase())) || [],
      lastName: data.filter(u => u.lastName.toUpperCase().includes(lastName.toUpperCase())) || [],
      pseudo: data.filter(u => u.pseudo.toUpperCase().includes(pseudo.toUpperCase())) || [],
      mail: data.filter(u => u.mail.toUpperCase().includes(mail.toUpperCase())) || []
    }
    return usersfind
  }
}