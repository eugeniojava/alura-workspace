import { NegotiationController } from "./controllers/NegotiationController";

alert("oi");
const controller = new NegotiationController();

$(".form").submit(controller.add.bind(controller));
