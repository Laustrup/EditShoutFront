package laustrup.editshoutfront.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin
@Controller
public class TemplateController {

    @GetMapping("/")
    public String login(Model model) {
        model.addAttribute("body","login");
        return "index.html";
    }

    @GetMapping("/dashboard/")
    public String dashboard(Model model) {
        model.addAttribute("body","dashboard");
        return "index.html";
    }

    @GetMapping("/edit_post/?pid={post_id}")
    public String postEdit(@PathVariable(name = "post_id") Long id, Model model) {
        model.addAttribute("body","post_edit");
        return "index.html";
    }
}
