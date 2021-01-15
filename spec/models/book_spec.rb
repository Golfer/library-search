require 'rails_helper'

RSpec.describe Book, type: :model do
  subject { build(:book) }

  describe 'included fields' do
    it { is_expected.to respond_to(:title) }
    it { is_expected.to respond_to(:description) }
  end

  describe 'Validations' do
    it 'is valid with valid attributes' do
      expect(subject).to be_valid
    end

    it 'is not valid without a Title' do
      subject.title = nil
      expect(subject).to_not be_valid
    end

    it { is_expected.to validate_presence_of(:title) }
  end
end
