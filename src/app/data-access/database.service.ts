import { Injectable } from '@angular/core';
import { Connection, ConnectionOptions, createConnection } from 'typeorm';
import { Settings } from './repositories/settings';
import { User } from './entities/user.entity';
import { Sku } from './entities/sku.entity';
import { Stock } from './entities/stock.entity';

@Injectable({
    providedIn: 'root'
})
export class DatabaseService {

    public connection: Promise<Connection>;
    private readonly options: ConnectionOptions;

    constructor() {
        Settings.initialize();
        this.options = {
            type: "sqlite",
            database: Settings.dbPath,
            entities: [User, Sku, Stock],
            synchronize: true,
            logging: false,
        };
        this.connection = createConnection(this.options);
    }
}
