
import {AppDataSource} from "../data-source";
import {Teacher} from "../entity/Teacher";

class TeacherService {
    private TeacherRepository;

    constructor() {
        this.TeacherRepository = AppDataSource.getRepository(Teacher);
    }

    getAll = async () => {
        let result = await this.TeacherRepository.find();
        return result;
    }


    add = async (product) => {
        let result = await this.TeacherRepository.save(product);
        return result;
    }

    delete = async (id) =>{
        let result = await this.TeacherRepository.delete(id);
        return result;
    }
    update = async (id, data) => {
        return await this.TeacherRepository.update(id, data);
    }
    save = async (data) => {
        return await this.TeacherRepository.save(data)
    }
    findById = async (id) => {
        return await this.TeacherRepository.find({where: {id: id}});
    }


}

export default new TeacherService();
