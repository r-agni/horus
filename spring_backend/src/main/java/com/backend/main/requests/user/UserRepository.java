package com.backend.main.requests.user;

import com.backend.main.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<Patient, Long> {

}
