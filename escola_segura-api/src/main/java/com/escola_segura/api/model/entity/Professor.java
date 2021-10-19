package com.escola_segura.api.model.entity;


import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "professor")
public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nome;

    @Column(name = "id_graduacao")
    private int graduacao;

    @Column
    private String email;

    @Column
    private String telefone;

    @Column
    private String cpf;

    @Column
    private String estadoCivil;
}
