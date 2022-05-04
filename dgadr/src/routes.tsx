import React from "react";
import {Routes, Route} from "react-router-dom";

import Home from "./Pages/Home";
import IdentificacaoBeneficiario from "./Pages/P1IdentificacaoBenef";
import PlanificacaoProducao from "./Pages/P2CaractPlanificUnidProducao";
import P3Efectproducao from "./Pages/P3CaractEfetPecUnidProd";
import P4Efectproducao from "./Pages/P4CaractEfetPecUnidProd";
import P5Efectproducao from "./Pages/P5CaractEfetPecUnidProd";
import P6Efectproducao from "./Pages/P6CaractEfetPecUnidProd";
import P7Efectproducao from "./Pages/P7CaractEfetPecUnidProd";

export default function MainRouters(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/IdentificacaoBeneficiario" element={<IdentificacaoBeneficiario />} />
            <Route path="/planificacaoproducao" element={<PlanificacaoProducao />} />
            <Route path="/P3producao" element={<P3Efectproducao />} />
            <Route path="/P4producao" element={<P4Efectproducao />} />
            <Route path="/P5producao" element={<P5Efectproducao />} />
            <Route path="/P6producao" element={<P6Efectproducao />} />
            <Route path="/P7producao" element={<P7Efectproducao />} />
        </Routes>

    )
}