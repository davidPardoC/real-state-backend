import { executeQueryDB } from '../../Helpers/DatabaseHelper'
import { AgencyType } from '../../Types/Agency.type'
import AgencyRepository from '../AgencyDB'

describe('Agency DB', () => {
    beforeAll(async () => {
        await executeQueryDB('DELETE FROM agency;')
    })

    it('Create new agency on db', async () => {
        const mockAgency: AgencyType = {
            name: 'test-agency',
            email: 'test@email.com',
            domain: 'testdomain.com',
            phone: '1234',
        }
        const agencyRepository = new AgencyRepository()
        const newAgency = await agencyRepository.createNewAgency(mockAgency)
        expect(newAgency).toEqual({
            name: 'test-agency',
            email: 'test@email.com',
            phone: '1234',
            domain: 'testdomain.com',
            status: "pending"
        })
    })
})
