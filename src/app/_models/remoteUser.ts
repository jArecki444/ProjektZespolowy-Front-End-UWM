export interface RemoteUser {
    userList: [{
      id: string;
      imie: string;
      nazwisko: string;
      dataOd: DateTimeFormat;
      timeOd: DateTimeFormat;
      dataDo: DateTimeFormat;
      timeDo: DateTimeFormat;
      powod: string;
    }];
  }
