import { StyleSheet } from 'react-native';

const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 60,
    backgroundColor: '#eef2f7',
  },
  profileCard: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 25,
    paddingVertical: 40,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 10,
  },
  profileImageWrapper: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 4,
    borderColor: '#4facfe',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  name: {
    fontSize: 26,
    fontWeight: '700',
    color: '#222',
    marginBottom: 6,
  },
  email: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 25,
  },
  editBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 15,
    backgroundColor: '#4facfe',
  },
  editBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  logoutBtn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#ff6b6b',
  },
  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default ProfileStyle;
