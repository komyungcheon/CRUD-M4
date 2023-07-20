import {AppDataSource} from "../data-source";
import {Teacher} from "../entity/Teacher";

class TeacherService {
    private repository = AppDataSource.getRepository(Teacher);

    getAll = async () => {
        return await this.repository.find();
    }

    save = async (data) => {
        return await this.repository.save(data)
    }

    findById = async (data) => {
        return await this.repository.findOne({where: {id: data}});
    }

    delete  = async (data) => {
        return await this.repository.delete(data)
    }
    update = async (id, data) => {
        return await this.repository.update(id, data);
    }
}

export default new TeacherService();
