import { filterImageFromURL } from "../../../src/util/util";
import { Router } from 'express'

const router: Router = Router();

// @ts-ignore
router.get('/', async (req: Request, res: Response) => {

    try {
        // @ts-ignore
        const { image_url } = req.query;
        const filtered_image = await filterImageFromURL(image_url);
        // @ts-ignore
        return res.status(200).sendFile(filtered_image)
    } catch (error) {
        // @ts-ignore
        return res.status(422).json({
            message: 'invalid image url'
        })
    }
});

export default router;