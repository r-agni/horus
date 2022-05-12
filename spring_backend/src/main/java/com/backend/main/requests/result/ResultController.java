package com.backend.main.requests.result;

import com.backend.main.entities.Result;
import com.backend.main.requests.user.UserService;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController()
@RequestMapping("api/v1/result")
@Tag(name = "Result API", description = "Send User Results and get User Results")
public class ResultController {
    private final ResultService resultService;
    private final UserService userService;

    public ResultController(ResultService resultService, UserService userService) {
        this.resultService = resultService;
        this.userService = userService;
    }
    @PostMapping("/sendResult/url")
    public Result sendResult(String url, Long patient) throws IOException {
        return resultService.getResult(url,patient);
    }
    @PostMapping("/sendResult")
    public Result sendResult(MultipartFile image, Long patient) throws IOException {
        return resultService.getResult(image, userService.getUser(patient).get());
    }

    @GetMapping("/getResult/{id}")
    public Result getResult(@PathVariable Long id) {
        return resultService.getResult(id);
    }

}
