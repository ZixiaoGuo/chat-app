package com.example.chatapp.model;


import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Id;
import java.util.Date;

@Data
@NoArgsConstructor
public class ChatMessage {

    private String senderName;
    private String recipientName;
    private String content;
    private Date timestamp;
    private Status status;

}
