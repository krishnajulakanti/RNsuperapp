import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

// import { MaterialIcons, FontAwesome } from '@expo/vector-icons';

const MyProfile = ({ navigation }) => {
    const [isFingerprintEnabled, setIsFingerprintEnabled] = React.useState(true);

    const toggleFingerprint = () => setIsFingerprintEnabled(!isFingerprintEnabled);

    return (
        <View style={styles.container}>
            {/* Profile Header */}
            <View style={styles.card}>
                {/* <FontAwesome name="user-circle-o" size={50} color="#2f4f4f" /> */}
                <View style={styles.headerContent}>
                    <Text style={styles.name}>John Smith</Text>
                </View>
                {/* <MaterialIcons name="edit" size={24} color="#6b8e23" style={styles.icon} /> */}
            </View>

            {/* Menu Items */}
            {[
                { icon: 'language', label: 'Change Language' },
                { icon: 'phone', label: '9944455999' },
                { icon: 'email', label: 'johnsmith@domain.com' },
                { icon: 'fingerprint', label: 'Disable Fingerprint', isSwitch: true },
                { icon: 'lock', label: 'Change Password' },
                { icon: 'vpn-key', label: 'Reset PIN' },
                { icon: 'sync', label: 'Sync your Social Accounts' },
                { icon: 'feedback', label: 'Feedback' },
                { icon: 'exit-to-app', label: 'Signout' },
            ].map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.card}
                    onPress={() => {
                        if (!item.isSwitch) {
                            // Handle navigation or action
                            console.log(`${item.label} clicked`);
                        }
                    }}
                >
                    {/* <MaterialIcons name={item.icon} size={24} color="#2f4f4f" /> */}
                    <Text style={styles.cardText}>{item.label}</Text>
                    {/* {item.isSwitch ? (
                        <Switch
                            value={isFingerprintEnabled}
                            onValueChange={toggleFingerprint}
                            style={styles.switch}
                        />
                    ) : (
                        <MaterialIcons name="edit" size={18} color="#6b8e23" style={styles.icon} />
                    )} */}
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default MyProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    headerContent: {
        flex: 1,
        marginLeft: 10,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2f4f4f',
    },
    cardText: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
        color: '#2f4f4f',
    },
    icon: {
        marginLeft: 'auto',
    },
    switch: {
        marginLeft: 'auto',
    },
});
