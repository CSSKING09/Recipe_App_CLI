import { StyleSheet } from 'react-native';

const ProfileStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 80,
    backgroundColor: '#eef2f7',
  },

  profileCard: {
    width: '92%',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 25,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 12,
  },

  profileImageWrapper: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 4,
    borderColor: '#4facfe',
    shadowColor: '#4facfe',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 8,
  },

  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },

  name: {
    fontSize: 28,
    fontWeight: '800',
    color: '#222',
    marginBottom: 6,
  },

  email: {
    fontSize: 16,
    fontWeight: '500',
    color: '#888',
    marginBottom: 35,
  },

  editBtn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 18,
    backgroundColor: '#4facfe',
    shadowColor: '#4facfe',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },

  editBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },

  logoutBtn: {
    width: '100%',
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#ff6b6b',
    shadowColor: '#ff6b6b',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },

  logoutText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default ProfileStyle;
