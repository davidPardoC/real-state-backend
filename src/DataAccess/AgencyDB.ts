import { executeQueryDB } from '../Helpers/DatabaseHelper'
import { AgencyType } from '../Types/Agency.type'

export default class AgencyRepository {
    async createNewAgency(agency: AgencyType) {
        const { name, domain, email, phone } = agency

        const query = `INSERT INTO agency(name, email, phone, domain ) 
                    VALUES ('${name}' , '${email}', '${phone}', '${domain}')
                    RETURNING name, email, phone, domain, status;`

        try {
            const result = await executeQueryDB(query)
            return result[0]
        } catch (error) {
            throw error
        }
    }

    async getAllAgencies() {
        const query = `SELECT * FROM agency;`
        const result = await executeQueryDB(query)
        return result
    }

    async deleteAgencyById(id:number){
        const query = `DELETE FROM agency WHERE agency_id=${id} RETURNING name, email, phone, domain, status;`;
        const result = await executeQueryDB(query)
        return result;
    }
}
