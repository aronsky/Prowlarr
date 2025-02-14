import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import FormGroup from 'Components/Form/FormGroup';
import FormInputGroup from 'Components/Form/FormInputGroup';
import FormLabel from 'Components/Form/FormLabel';
import { inputTypes } from 'Helpers/Props';
import { CheckInputChanged } from 'typings/inputs';
import translate from 'Utilities/String/translate';
import selectTableOptions from './selectTableOptions';

interface IndexerIndexTableOptionsProps {
  onTableOptionChange(...args: unknown[]): unknown;
}

function IndexerIndexTableOptions(props: IndexerIndexTableOptionsProps) {
  const { onTableOptionChange } = props;

  const tableOptions = useSelector(selectTableOptions);

  const { showSearchAction } = tableOptions;

  const onTableOptionChangeWrapper = useCallback(
    ({ name, value }: CheckInputChanged) => {
      onTableOptionChange({
        tableOptions: {
          ...tableOptions,
          [name]: value,
        },
      });
    },
    [tableOptions, onTableOptionChange]
  );

  return (
    <FormGroup>
      <FormLabel>{translate('ShowSearch')}</FormLabel>

      <FormInputGroup
        type={inputTypes.CHECK}
        name="showSearchAction"
        value={showSearchAction}
        helpText={translate('ShowSearchHelpText')}
        onChange={onTableOptionChangeWrapper}
      />
    </FormGroup>
  );
}

export default IndexerIndexTableOptions;
