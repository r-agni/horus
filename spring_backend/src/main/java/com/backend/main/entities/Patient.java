package com.backend.main.entities;

import com.sun.istack.NotNull;

import javax.persistence.*;
import javax.swing.*;
import java.util.List;

@Entity
public class Patient {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private long id;
    @OneToMany
    private List<Result> results;
    @NotNull
    @Column(name = "password", nullable = false)
    private String password;
    @JoinColumn(name = "address_id")
    @Column(unique = true)
    private String email;
    @Column(nullable = false)
    private String firstName;
    @Column(nullable = false)
    private String lastName;
    @Enumerated(EnumType.STRING)
    @Column
    private BloodType bloodType;

    public Patient() {
    }

    public Patient(String password, String name, String email) {
        this.password = password;
        var sp = name.split(" ");
        this.firstName = sp[0];
        this.lastName = sp[sp.length - 1];
        this.email = email;
    }

    public List<Result> getResults() {
        return results;
    }

    public void setResults(List<Result> results) {
        this.results = results;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public BloodType getBloodType() {
        return bloodType;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getPassword() {
        return password;
    }


    public void setBloodType(BloodType bloodType) {
        this.bloodType = bloodType;
    }

}
