require 'rails_helper'

describe User, type: :model do
  subject { build(:user) }

  describe 'included fields' do
    it { is_expected.to respond_to(:email) }
    it { is_expected.to respond_to(:password) }
    it { is_expected.to respond_to(:first_name) }
    it { is_expected.to respond_to(:last_name) }
  end

  describe 'Validations' do
    it 'is valid with valid attributes' do
      expect(subject).to be_valid
    end

    it 'is not valid without a Email' do
      subject.email = nil
      expect(subject).to_not be_valid
    end

    it { is_expected.to validate_presence_of(:email) }
  end
end
