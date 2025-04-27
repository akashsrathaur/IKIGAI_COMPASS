package com.ikigai;

import com.ikigai.ui.IkigaiGUI;

import javax.swing.*;

public class Main {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame parentFrame = new JFrame();
            IkigaiGUI gui = new IkigaiGUI(parentFrame);
            gui.show();
        });
    }
}
