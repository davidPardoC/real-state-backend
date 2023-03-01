import { AgencyType } from '../../../Types/Agency.type'
import { createAgency } from '../create-agency'

describe('Create Agency Use Case', () => {
    it('Create new agency', async () => {
        const mockAgency: AgencyType = {
            name: 'test-agency',
            email: 'test@email.com',
            domain: 'testdomain.com',
            phone: '1234',
        }

        const mockCreateFunction = () => ({
            name: 'test-agency',
            email: 'test@email.com',
            phone: '1234',
            domain: 'testdomain.com',
            status: 'pending',
        })

        const result = await createAgency(mockAgency, mockCreateFunction)
        expect(result).toEqual({
            name: 'test-agency',
            email: 'test@email.com',
            phone: '1234',
            domain: 'testdomain.com',
            status: 'pending',
        })
    })
})
