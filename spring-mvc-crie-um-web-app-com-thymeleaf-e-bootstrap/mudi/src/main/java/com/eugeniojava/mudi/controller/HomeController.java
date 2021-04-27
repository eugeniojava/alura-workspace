package com.eugeniojava.mudi.controller;

import com.eugeniojava.mudi.model.Order;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.Arrays;
import java.util.List;

@Controller
public class HomeController {

    @GetMapping("/home")
    public String home(Model model) {
        Order order = new Order();

        order.setProductName("NETGEAR Wi-Fi Range Extender EX3700");
        order.setProductUrl("https://www.amazon" +
                ".com/NETGEAR-Wi-Fi-Range-Extender-EX3700/dp/B00R92CL5E");
        order.setImageUrl("https://images-na.ssl-images-amazon" +
                ".com/images/I/61z5oOk5fzL._AC_SL1350_.jpg");
        order.setProductDescription("Some description");
        List<Order> orders = Arrays.asList(order);
        model.addAttribute("orders", orders);

        return "home";
    }
}
