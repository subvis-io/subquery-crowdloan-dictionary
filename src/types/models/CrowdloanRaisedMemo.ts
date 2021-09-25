// Auto-generated , DO NOT EDIT
import {Entity} from "@subql/types";
import assert from 'assert';


export class CrowdloanRaisedMemo implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public fundId: string;

    public locked: bigint;

    public status: string;

    public timestamp: Date;

    public blockNum: number;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save CrowdloanRaisedMemo entity without an ID");
        await store.set('CrowdloanRaisedMemo', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove CrowdloanRaisedMemo entity without an ID");
        await store.remove('CrowdloanRaisedMemo', id.toString());
    }

    static async get(id:string): Promise<CrowdloanRaisedMemo | undefined>{
        assert((id !== null && id !== undefined), "Cannot get CrowdloanRaisedMemo entity without an ID");
        const record = await store.get('CrowdloanRaisedMemo', id.toString());
        if (record){
            return CrowdloanRaisedMemo.create(record);
        }else{
            return;
        }
    }


    static async getByFundId(fundId: string): Promise<CrowdloanRaisedMemo[] | undefined>{
      
      const records = await store.getByField('CrowdloanRaisedMemo', 'fundId', fundId);
      return records.map(record => CrowdloanRaisedMemo.create(record));
      
    }

    static async getByStatus(status: string): Promise<CrowdloanRaisedMemo[] | undefined>{
      
      const records = await store.getByField('CrowdloanRaisedMemo', 'status', status);
      return records.map(record => CrowdloanRaisedMemo.create(record));
      
    }

    static async getByTimestamp(timestamp: Date): Promise<CrowdloanRaisedMemo[] | undefined>{
      
      const records = await store.getByField('CrowdloanRaisedMemo', 'timestamp', timestamp);
      return records.map(record => CrowdloanRaisedMemo.create(record));
      
    }


    static create(record){
        let entity = new CrowdloanRaisedMemo(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
