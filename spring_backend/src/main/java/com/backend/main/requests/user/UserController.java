package com.backend.main.requests.user;

import com.backend.main.entities.Patient;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/user")
@Tag(name = "Patient Creation and Modification Service", description = "CRUD actions on users")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PutMapping("/update")
    @ResponseStatus(code = HttpStatus.OK)
    public Patient updateUser(Patient patient) {
        return patient;
    }

    @PutMapping("/add/bloodtype")
    public Patient addBloodtype(Long id, String bloodType) {
        return userService.updatebloodType(id, bloodType);

    }



    @PostMapping("/create")
    public Patient createUser(String password, String name, String email) {
        System.out.println(name);
        System.out.println(password);
        System.out.println(email);
        if(name==null) return null;
        return userService.newUser(password, name, email);
    }

    @DeleteMapping("/remove")
    public void removeUser(Long id) {
        userService.removeUser(id);
    }

    @GetMapping("/get/{id}")
    public Patient getPatientById(@PathVariable Long id) {
        return userService.getUser(id).get();
    }

}
