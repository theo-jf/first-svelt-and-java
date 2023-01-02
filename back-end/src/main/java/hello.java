// import java.io.Console;

import org.springframework.boot.*;
import org.springframework.boot.autoconfigure.*;
// import org.springframework.stereotype.*;
import org.springframework.web.bind.annotation.*;

@RestController
@EnableAutoConfiguration
public class hello {
    Integer counter = 0;

    @GetMapping("/api/server/fetch")
    Integer fetchRocks() {
        return counter;
    }

    @PostMapping("/api/server/add")
    public String addRock() {
        counter += 1;
        return "Rock added";
    }

    @DeleteMapping("/api/server/remove/{id}")
    public String fakeDeleteRoute(@PathVariable("id") Long id) {
        if (counter > 0) {
            counter -= 1;
        }
        return "Rock deleted";
    }

    public static void main(String[] args) throws Exception {
        SpringApplication.run(hello.class, args);
    }

    // Function for array creation
    // Integer[] createData() {

    //     Integer [] arrayOfNumbers = new Integer [counter];

    //     // Creates an array to return
    //     for (int i = 0; i < counter; i++) {
    //         arrayOfNumbers[i] = i;
    //     }

    //     return arrayOfNumbers;
    // }
}
