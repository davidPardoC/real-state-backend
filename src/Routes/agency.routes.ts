import { Router, Request, Response } from 'express'
import { ApiErrorMiddleWare } from '../Middlewares/ApiErrorMiddleware'
import AgencyController from '../Controllers/AgencyController'
import AgencyValidators from './Validators/agency.validator'
import { AuthMiddleware } from '../Middlewares/AuthMiddlewares'
import { SuperAdminMiddleware } from '../Middlewares/SuperAdminMiddleware'

export const AgencyRouter = Router()

const agencyController = new AgencyController()

AgencyRouter.post(
    '',
    AuthMiddleware,
    SuperAdminMiddleware,
    AgencyValidators.createNewAgencyValidator,
    ApiErrorMiddleWare,
    async (req: Request, res: Response) => {
        const { name, email, phone, domain } = req.body
        try {
            const newAgency = await agencyController.createNewAgency({
                name,
                email,
                phone,
                domain,
            })
            return res.json(newAgency)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
)

AgencyRouter.get('', async (_req: Request, res: Response) => {
    try {
        const allAgencies = await agencyController.getAllAgencies()
        return res.json(allAgencies)
    } catch (error) {
        return res.status(500).json(error)
    }
})

AgencyRouter.delete(
    '/:id',
    AgencyValidators.deleteAgency,
    ApiErrorMiddleWare,
    async (req: Request, res: Response) => {
        const { id } = req.params
        try {
            const deletedAgency = await agencyController.deleteAgencyById(
                Number(id),
            )
            return res.json(deletedAgency)
        } catch (error) {
            return res.status(500).json(error)
        }
    },
)
