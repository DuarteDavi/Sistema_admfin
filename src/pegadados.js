
function pegadados(){
    nome_empresaValue = document.getElementById("nome-empresa").value
    pessoa_juridicaValue = document.getElementById("pj-direito-privado").value;
    pessoa_juridicaValue = document.getElementById("pj-direito-publico").value;
    cnpjj = document.getElementById("cnpj").value;
    cnpjValue = cnpjj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
    endereçoValue =document.getElementById("logradouro-empresa").value;
    baiirroValue = document.getElementById("bairro-empresa").value;
    cidade_empresaValue = document.getElementById("cidade-empresa").value;
    cep_empresaValue = document.getElementById("cep-empresa").value;
    uf_empresaValue = document.getElementById("uf-empresa").value;
    nome_representanteValue = document.getElementById("nome-representante").value;
    estado_civilValue = document.getElementById("estado-civil").value;
    profissaoValue = document.getElementById("profissao-representante").value;
    cpff = doc-ument.getElementById("cpf-representante").value;
    cpf_representanteValue  = cpff.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    rg_representanteValue = document.getElementById("rg-representante").value;
    endereço_representanteValue = document.getElementById("logradouro").value;
    bairro_representanteValue = document.getElementById("bairro-representante").value;
    cidade_representanteValue = document.getElementById("cidade-representante").value;
    cep_rep= document.getElementById("cep-representante").value;
    cep_representanteValue = cep_rep.replace(/^(\d{5})(\d{2})/, "$1-$2");
    uf_representanteValue = document.getElementById("uf-representante").value;
    tipo_projetoValue = document.getElementById("site").value;
    tipo_projetoValue = document.getElementById("sistema").value;
    tipo_projetoValue = document.getElementById("app").value;
    link_dominioValue = document.getElementById("linksite").value;
    objetoValue = document.getElementById("objeto").value;
    tempo_projetoValue = document.getElementById("tempo-projeto").value;
    valor_projetoValue = document.getElementById("valor-projeto").value;
    condicao_pagamentoValue = document.getElementById("avista").value;
    condicao_pagamentoValue = document.getElementById("parcelado").value;
    condicao_pagamentoValue = document.getElementById("entrada-parcelado").value;
    num_parcelasValue = document.getElementById("num-parcelas").value;
    testemunha_byteValue = document.getElementById("nome-t-byte").value;
    cpf_testbyte = document.getElementById("cpf-t-b").value;
    cpf_testemunha_byteValue  = cpf_testbyte.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")
    testemunha_contratadaValue = document.getElementById("nome-t-contratada").value;
    cpf_testemunha_contrat = document.getElementById("nome-t-c").value;
    cpf_testemunha_contratadaValue  = cpf_testemunha_contrat.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4")

    dados = {
        empresa: nome_empresaValue,
        pessoa_juridica : pessoa_juridicaValue,
        cnpj : cnpjValue,
        logradouro : endereçoValue,
        bairro : baiirroValue,
        cidade : cidade_empresaValue,
        cep : cep_empresaValue,
        uf : uf_empresaValue,
        representante : nome_representanteValue,
        estado_civil : estado_civilValue,
        profissao : profissaoValue,
        cpf_representante : cpf_representanteValue,
        rg_representante : rg_representanteValue,
        logradouro_representante : endereço_representanteValue,
        bairro_representante : bairro_representanteValue,
        cidade_representante : cidade_representanteValue,
        cep_representante : cep_representanteValue,
        uf_representante : uf_representanteValue,
        tipo_projeto : tipo_projetoValue,
        link_dominio : link_dominioValue,
        objeto : objetoValue,
        tempo_projeto : tempo_projetoValue,
        valor_projeto : valor_projetoValue,
        condicao_pagamento : condicao_pagamentoValue,
        num_parcelas : num_parcelasValue,
        testemunha_byte : testemunha_byteValue,
        cpf_testemunha_byte : cpf_testemunha_byteValue,
        testemunha_contratada : testemunha_contratadaValue,
        cpf_testemunha_contratada : cpf_testemunha_contratadaValue
    }
    window.location.href ="contratofeito.html"

}