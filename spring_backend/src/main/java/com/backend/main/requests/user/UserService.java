package com.backend.main.requests.user;

import com.backend.main.entities.BloodType;
import com.backend.main.entities.Patient;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public Patient newUser(String password, String name, String email) {
        Patient u = new Patient(password, name, email);
        return userRepository.save(u);
    }

    public Optional<Patient> getUser(Long id) {
        return userRepository.findById(id);
    }

    public Patient updatebloodType(Long id, String bloodType) {
        Patient v = userRepository.getById(id);
        v.setBloodType(BloodType.valueOf(bloodType));
        userRepository.save(v);
        return v;
    }

    public void removeUser(Long id) {
        userRepository.delete(userRepository.getById(id));
    }
}
