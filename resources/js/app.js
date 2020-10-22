import "alpinejs";
import "./vendor/ark/page-scroll";
import { picasso } from "@vechain/picasso";
import Chart from "chart.js";

window.createAvatar = (seed) =>
    picasso(seed).replace('width="100" height="100"', "");
