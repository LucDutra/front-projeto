package com.escola_segura.api.controller.dto;

import com.escola_segura.api.model.entity.Aluno;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
public class AlunoDto {

    private String nome;
    private String responsavel;

    public AlunoDto(Aluno aluno) {
        this.nome = aluno.getNome();
        this.responsavel = aluno.getResponsavel().getNome();
    }

    public static List<AlunoDto> converter(List<Aluno> alunos) {
        return alunos.stream().map(AlunoDto::new).collect(Collectors.toList());
    }
}
