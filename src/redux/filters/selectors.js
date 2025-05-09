import { createSelector } from "reselect";
import { selectContacts } from "../contacts/selectors";

export const selectFilteredContacts = createSelector(
  [selectContacts, (state) => state.filters.name],
  (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const selectNameFilter = (state) => state.filters.name;
