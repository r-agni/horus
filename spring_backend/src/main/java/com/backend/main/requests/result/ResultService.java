package com.backend.main.requests.result;

import com.backend.main.entities.Patient;
import com.backend.main.entities.Result;
import com.backend.main.requests.user.UserRepository;
import com.backend.main.singletons.ResultSingleton;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class ResultService {
    private final ResultRepository repository;
    private final UserRepository userRepository;

    public ResultService(ResultRepository repository, UserRepository userRepository) {
        this.repository = repository;
        this.userRepository = userRepository;
    }

    public Result getResult(Long id) {
        return repository.getById(id);
    }

    public Result getResult(MultipartFile image, Patient patient) throws IOException {
        Result result = ResultSingleton.getResult(image, patient);
        repository.save(result);
        return result;
    }

    public Result getResult(String url, Long patient) throws IOException {
        Result result = ResultSingleton.getResult(url, userRepository.getById(patient));
        repository.save(result);
        return result;
    }
}
