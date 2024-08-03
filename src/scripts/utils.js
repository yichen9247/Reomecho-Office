
import developer from "./developer"
import siteConfig from "../../config/config"
import DisableDevtool from 'disable-devtool'
import { useApplicationStore } from "@/stores/application"
if (import.meta.env.MODE === 'production') DisableDevtool(developer);

export default {siteConfig, useApplicationStore}