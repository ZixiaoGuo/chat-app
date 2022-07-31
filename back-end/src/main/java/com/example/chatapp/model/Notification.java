package com.example.chatapp.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Notification {
    @Id
    private String id;
    private String senderId;
    private String senderName;
}
