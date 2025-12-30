package com.ikigai.ui;

mvm import com.ikigai.models.User;
import com.ikigai.models.Career;
import com.ikigai.services.CareerService;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.List;

public class IkigaiGUI {
    private JDialog dialog;
    private JTextField nameField, passionField, missionField, vocationField, professionField;
    private JTextArea resultArea;
    private CareerService careerService;

    public IkigaiGUI(JFrame parent) {
        careerService = new CareerService();

        dialog = new JDialog(parent, "🌟 IKIGAI Career Compass 🌟", true);
        dialog.setSize(850, 700);
        dialog.setLocationRelativeTo(parent);
        dialog.setDefaultCloseOperation(JDialog.DISPOSE_ON_CLOSE);

        JPanel panel = new JPanel();
        panel.setLayout(new GridBagLayout());
        panel.setBorder(BorderFactory.createEmptyBorder(20, 20, 20, 20));
        panel.setBackground(new Color(245, 245, 250)); // Light pastel background

        GridBagConstraints gbc = new GridBagConstraints();
        gbc.fill = GridBagConstraints.HORIZONTAL;
        gbc.insets = new Insets(10, 10, 10, 10);

        Font labelFont = new Font("Serif", Font.BOLD, 16);

        // Title Label with Emoji
        JLabel titleLabel = new JLabel("🚀 Discover Your IKIGAI 🔍");
        titleLabel.setFont(new Font("Serif", Font.BOLD, 24));
        titleLabel.setForeground(new Color(255, 87, 34)); // Warm orange
        gbc.gridx = 0;
        gbc.gridy = 0;
        gbc.gridwidth = 2;
        panel.add(titleLabel, gbc);

        // Adding Form Fields with Icons
        nameField = createLabeledField(panel, "👤 Name:", labelFont, gbc, 1);
        passionField = createLabeledField(panel, "❤️ What Do You Love? (Passion):", labelFont, gbc, 2);
        missionField = createLabeledField(panel, "🌍 What Does The World Need? (Mission):", labelFont, gbc, 3);
        vocationField = createLabeledField(panel, "🎯 What Are You Good At? (Vocation):", labelFont, gbc, 4);
        professionField = createLabeledField(panel, "💰 What Can You Get Paid For? (Profession):", labelFont, gbc, 5);

        // Submit Button with Animation Effect
        JButton submitButton = new JButton("🎯 Get Career Suggestions");
        submitButton.setFont(new Font("SansSerif", Font.BOLD, 16));
        submitButton.setBackground(new Color(52, 152, 219)); // Elegant blue
        submitButton.setForeground(Color.WHITE);
        submitButton.setFocusPainted(false);
        submitButton.setBorder(BorderFactory.createLineBorder(new Color(41, 128, 185), 2));
        submitButton.setCursor(new Cursor(Cursor.HAND_CURSOR));
        submitButton.setPreferredSize(new Dimension(320, 40)); // Larger button

        // Hover effect for button
        submitButton.addMouseListener(new java.awt.event.MouseAdapter() {
            public void mouseEntered(java.awt.event.MouseEvent evt) {
                submitButton.setBackground(new Color(41, 128, 185)); // Darker blue on hover
            }
            public void mouseExited(java.awt.event.MouseEvent evt) {
                submitButton.setBackground(new Color(52, 152, 219));
            }
        });

        gbc.gridx = 0;
        gbc.gridy = 6;
        gbc.gridwidth = 2;
        panel.add(submitButton, gbc);

        // Result Area with Larger Size & Icons
        resultArea = new JTextArea(8, 40);
        resultArea.setFont(new Font("Arial", Font.PLAIN, 14));
        resultArea.setEditable(false);
        resultArea.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(Color.GRAY, 2),
                BorderFactory.createEmptyBorder(5, 5, 5, 5)
        ));
        resultArea.setBackground(new Color(255, 250, 240)); // Soft peach
        resultArea.setForeground(new Color(54, 69, 79)); // Dark text

        JScrollPane scrollPane = new JScrollPane(resultArea);
        gbc.gridy = 7;
        gbc.gridwidth = 2;
        gbc.fill = GridBagConstraints.BOTH;
        panel.add(scrollPane, gbc);

        // Action Listener for Button
        submitButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                getCareerSuggestions();
            }
        });

        dialog.add(panel);
    }

    public void show() {
        dialog.setVisible(true);
    }

    private JTextField createLabeledField(JPanel panel, String labelText, Font font, GridBagConstraints gbc, int y) {
        JLabel label = new JLabel(labelText);
        label.setFont(font);
        label.setForeground(new Color(44, 62, 80)); // Dark blue-gray for better contrast

        gbc.gridx = 0;
        gbc.gridy = y;
        gbc.gridwidth = 1;
        panel.add(label, gbc);

        JTextField textField = new JTextField(30);
        textField.setFont(new Font("SansSerif", Font.PLAIN, 14));
        textField.setBorder(BorderFactory.createCompoundBorder(
                BorderFactory.createLineBorder(new Color(41, 128, 185), 2), // Blue border
                BorderFactory.createEmptyBorder(5, 10, 5, 10) // Padding inside
        ));
        textField.setBackground(Color.WHITE);
        textField.setForeground(new Color(44, 62, 80));
        textField.setPreferredSize(new Dimension(250, 30)); // Increased size

        gbc.gridx = 1;
        panel.add(textField, gbc);

        return textField;
    }

    private void getCareerSuggestions() {
        // Get user inputs from text fields
        String name = nameField.getText().trim();
        String passion = passionField.getText().trim();
        String mission = missionField.getText().trim();
        String vocation = vocationField.getText().trim();
        String profession = professionField.getText().trim();

        // Placeholder for interests (modify this logic based on user input collection)
        List<String> interests = new ArrayList<>();
        interests.add(passion);
        interests.add(mission);

        // Create the User object with correct parameters
        User user = new User(name, "user@example.com", interests, passion, mission, vocation);

        // Get career suggestions
        List<Career> careers = careerService.suggestCareers(user);
        resultArea.setText("✨ Career Suggestions for " + name + " ✨\n\n");

        // Display the career suggestions
        for (Career career : careers) {
            resultArea.append("💡 " + career.getTitle() + " - " + career.getDescription() + "\n\n");
        }
    }
}
